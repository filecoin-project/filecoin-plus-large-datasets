export async function getLastComment(octokit, owner, repo, issueNumber, includeBot) {
  const botSignature = "Commented by Stale Bot."

  let comments = await octokit.paginate(octokit.issues.listComments, {
    owner,
    repo,
    issue_number: issueNumber,
    per_page: 100
  });
  
  if (!comments || comments.length === 0) {
    return null; // Issue has no comments.
  }

  if (!includeBot) {
    comments = comments.filter(comment => 
      !(comment.user.login === 'github-actions[bot]' && 
      comment.body.includes(botSignature))
    );
  }

  // Order comments by date desc.
  comments.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  return comments[0];
}
