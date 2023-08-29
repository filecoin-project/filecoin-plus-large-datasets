// .github/scripts/close_inactive/close_stale_issues.js

import { Octokit } from "@octokit/rest";
import fetch from "node-fetch";
import { getLastComment } from "./utils.mjs";

const DAYS_TO_WAIT = 14;
const owner = process.env.GITHUB_REPOSITORY.split('/')[0];
const repo = process.env.GITHUB_REPOSITORY.split('/')[1];

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
  request: {
    fetch: fetch
  }
});

async function closeStaleIssues() {

  let issues = await octokit.paginate(octokit.issues.listForRepo, {
    owner,
    repo,
    state: 'open',
    per_page: 100,
  });

  const dateThreshold = new Date();
  dateThreshold.setDate(dateThreshold.getDate() - DAYS_TO_WAIT);
  
  Promise.allSettled(
    issues.map(
      async (issue) => new Promise(
        async (resolve, reject) => {
          const lastComment = await getLastComment(octokit, owner, repo, issue.number, false);
          let updatedAt = lastComment 
            ? new Date(lastComment.created_at) 
            : new Date(issue.created_at);

          // Let's calculate the difference between the two dates
          const diffTime = dateThreshold - updatedAt;
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

          if (diffDays > 0) {
            await octokit.issues.createComment({
              owner,
              repo,
              issue_number: issue.number,
              body: `This application has not seen any responses in the last 14 days, so for now it is being closed. Please feel free to contact the Fil+ Gov team to re-open the application if it is still being processed. Thank you!
\n\n
--
Commented by Stale Bot.`
            });
            // Add stale label.
            await octokit.issues.addLabels({
              owner,
              repo,
              issue_number: issue.number,
              labels: ['stale']
            });

            // Close issue.
            await octokit.issues.update({
              owner,
              repo,
              issue_number: issue.number,
              state: 'closed'
            });

            console.log(`Let's close issue ${issue.number}. Last commented ${diffDays} days ago`);
          } else {
            console.log(`Issue ${issue.number} will remain open. Updated ${diffDays} days ago`);
          }
          return resolve();
        }
      )
    )
  );
}
closeStaleIssues();

