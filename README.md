# Archived July 2024
With the deprecation of the large dataset notary program, we are archiving this repo. For Fil+ Allocator Governance discussions, see this [Governance repo](https://github.com/filecoin-project/Allocator-Governance/). For the registry of active allocators, see this [Allocator Registry repo](https://github.com/filecoin-project/Allocator-Registry)

To view other updated reference links for the Fil+ program, please see:

- For information on the open and pending DataCap deals, please see [FIDL's Allocator.tech](https://allocator.tech/).
- For information on support issues or a listing of all current Allocators, please see [Allocator Registry repo](https://github.com/filecoin-project/Allocator-Registry)
- For getting in touch, please reach out in [SLACK](https://filecoin.io/slack)
- Bi-weekly recorded Fil+ governance meetings on [Youtube](https://www.youtube.com/playlist?list=PLp3zrT1ewY0kYN1hJpERMUxTCbFC4yZwN)




# Filecoin Plus for large datasets

Filecoin Plus is a community program that aims to increase Filecoin's network by becoming the decentralized storage network for humanity's most important information. As the network continues to grow, we as a community need to make sure to maintain a civil online engagement. To learn more about acceptable community behavior please check the [Filecoin Community Code of Conduct](https://github.com/filecoin-project/community/blob/master/CODE_OF_CONDUCT.md).

This repo serves as the hub for client applications for DataCap at a large scale - currently defined as > 100 TiB of DataCap. If you wish to generally learn more about Filecoin Plus or apply for less than 500 TiB of DataCap, check out the following resources: 

- Filecoin Plus documentation: https://docs.filecoin.io/store/filecoin-plus/
- Fil+ community governance repo: https://github.com/filecoin-project/notary-governance/
- Fil+ client on-boarding and DataCap applications: https://github.com/filecoin-project/filecoin-plus-client-onboarding
- To apply for DataCap: https://filplus.storage/apply

The process outlined below for clients looking to apply for a large amount of DataCap was initially proposed in [Issue #94 - Onboarding projects with large DataCap requirements](https://github.com/filecoin-project/notary-governance/issues/94). Through an initial pilot phase and learnings/feedback collected over time, we are currently on the third iteration of the Large Dataset Notary (LDN) process. See #217, #328, #509 for additional details.

The main difference between this process and applying for DataCap directly from a notary (via filplus.storage) is that this process is (1) significantly more public, (2) DataCap is allocated from a large multisig Notary address, and (3) DataCap is allocated in tranches. 

## Current Scope

Based on conversations in various issues and governance calls, here is the current scope of the Large Dataset Notary (LDN) program. You can find relevant issues, as well as links to governance call recordings in the [Notary Governance repo](https://github.com/filecoin-project/notary-governance). Please note that this is still an evolving conversation, so the scope is subject to change. If you would like to participate in this conversation or have feedback, please let us know! You can start a discussion topic in the [Notary Governance repo](https://github.com/filecoin-project/notary-governance/discussions), in the [fil-plus](https://filecoinproject.slack.com/archives/C01DLAPKDGX) public Slack channel, or in an upcoming [Governance call](https://calendar.google.com/calendar/embed?src=c_k1gkfoom17g0j8c6bam6uf43j0%40group.calendar.google.com&ctz=America%2FLos_Angeles).

Clients can currently apply for a **Large Dataset Notary** which can grant them between 100 TiB and 5 PiB of total DataCap per application. 

In order for a client and their dataset to be eligible: 

- The dataset should be public, open, and mission aligned with Filecoin and Filecoin Plus. This also means that the data should be accessible to anyone in the network, without requiring any special permissions or access requirement. If this is not the case - consider instead going via the E-Fil+ pathway to getting DataCap. You can read more about that [here](https://efilplus.super.site/)

- If a client wants to onboard more than 5+PiBs, the recommendation would be to start with a few applications and earn trust from the community. Having a positive reputation and proving to the community first by onboarding a smaller amount of data will help anyone who wants to onboard massive amounts of data much faster and smoother. 

- Stored data should be readily retrievable on the network and this can be regularly verified (though the use of manual or automated verification that includes retrieving data from various miners over the course of the DataCap allocation timeframe). Each project should specify what portion of the data is retrievable and provide justification. From there notaries can decide during the due diligence phases if the client’s application is justifiable and can agree to sign it or not.

- There should be no open disputes in the Fil+ ecosystem against the client during the time that the application is open for review

- With the current tooling and workflow, the recommendation would be to use a different address for every application. However, if you cannot, know that the workaround requires manual attention. We strongly do not recommend this due to delays created and mixed math for subsequent allocation issues. In the short term, we can support this. Please notify Simon Kim and add this to your LDN application if you absolutely have to go down this path and share why.

- Best practice for storing large datasets includes ideally, storing it in 3 or more regions, with 4 or more storage provider operators or owners, and having at least 5 replicas of the dataset. No more than one replica should be stored with one SP ID, and if the data cannot leave a particular geographic boundary, then it is expected that replication will still happen across different locations (cities, datacenters, etc.). Each storage provider should not exceed 30% of the total datacap that the client was allocated and the storage provider should have published its public IP address. If you cannot follow these practices due to policy or any other issues, you may explain your case in the application and provide to the community what method you can do instead. These are recommendations and not strict rules that every client must follow.  

- Regarding cases of abusing the program’s incentive structure, notaries should not be signing their own applications. For the program to work, each stakeholder will need to play their parts in a truthful manner. 

- Datasets that have been stored previously, may be allowed to be copied over time on chain. This can provide value to the network if it is a new team, a new datacenter, and a new geopolitical region. However, storage providers should not be storing more than 20% of the duplicated data. While same datasets may help the network, this should not be a reason for client’s to onboard the same exact dataset repeatedly, client’s should  explicitly justify their reasoning on why the repeated dataset should be onboarded.

- To help notaries more efficiently complete their due diligence process, clients should justify their reasoning of the amount of DataCap that you are applying for will help notaries with their due diligence process. Clients should explain how their dataset is useful for the network, and visible proof of the size of the data that is being onboarded.

If you are a client who is interested in applying for a large DataCap allocation via an LDN, please see the steps outlined below.

## Applying for a large DataCap allocation

Application flow: 

- Client submits an application by applying on https://filplus.storage/apply or creating a GitHub issue in this repo
- Automation and the Fil+ governance team ensures that the application has been fully filled out, and a request is sent to the RKH to set up a Notary (LDN) for this client
- Notaries and community members carry out due diligence via comments on the issue and in conversation during a Notary Governance call
- In parallel, RKH are informed of the client application request and approve the multisig LDN to allocate DataCap to this client in tranches
- If the community is in agreement that the dataset is in line with the values of the Filecoin Plus program and should be approved for a DataCap allocation, 2 notaries approve the request to allocate the first tranche of DataCap

When clients use up > 75% of the prior DataCap allocation, a request for additional DataCap in the form of the next tranche is automatically kicked off (via the'subsequent allocation bot'). Notaries have access to on-chain data required to verify that the client is operating in good faith, in accordance with the principles of the program, and in line with their allocation strategy outlined in the original application. 2 notaries need to approve the next tranche of DataCap to be allocated to the client. The same notary cannot sign off on immediately subsequent allocations of DataCap, i.e., you need at minimum 4 unique notaries to support your application on an ongoing basis to receive multiple tranches of DataCap. 

## Application flow labels

The following labels indicate the statues of LDN applications. The most recent version of these labels were released on April 15, 2023. More comprehensive release notes can be found in [this blog](https://medium.com/filecoin-plus/ldn-label-update-part-1-label-consolidation-ae2691c78702).

- **Validated**: 
  - The validated label is added to an issue when the parent comment of an LDN application is fully completed and all questions have been answered. 
  - When the validated label is added, a member of the governance team will review the application and post the trigger message. 
  - This trigger message signifies to the SSA bot (subsequent allocation bot) to initiate the tranche allocation process, which will then post the request message.

- **Ready to Sign**: 
    - If the SSA bot detects the trigger message posted by the governance team or identifies that the client is low on previously granted DataCap (<25% of DataCap balance last granted), it will post a request message. 
    - Once there is a request message, the ready to sign label should be added to the LDN application. 
    - SSA bot detects the ready to sign label and notaries should be able to view the LDN application on the Fil+ registry (filplus.fil.org) for next steps.

- **Start Sign Datacap**: 
    - When the first notary, of the two notaries required, has completed their due diligence and has signed in support of the LDN application DataCap allocation tranche, the proposal message is posted. 
    - The start sign datacap label is added to the issue when this proposal message is posted and the SSA bot detects it. 
    - On the Fil+ registry, the status is updated to indicate that one notary has already supported the LDN application. The applicant now needs a second notary to sign the tranche to release DataCap.

- **Granted**: 
    - When a second notary has completed due diligence and signed in support of the LDN application’s DataCap tranche request, the approval message is posted.
    - The granted label is added to the issue when this approval message is posted and the SSA bot detects it. 
    - If successful, DataCap is issued for the granted allocation. The LDN application is removed from the list notaries see on the Filecoin Plus registry, until the next tranche is requested and the process repeats.

- **Total DataCap Reached**: 
    - The total datacap reached label is added when the client has reached the total amount of DataCap requested in the application.

- **Error**: 
    - Consolidation of what used to be a set of many error labels that indicate tooling errors. 
    - An error message with more information about the error is posted in the issue. 
    - The following is an example of an error message where the “Address” field is not specified in the “Approved Comment.”

- **Governance Review Needed**: 
    - Information provided by the applicant has changed, requiring a manual check from members focused on the client UX on the governance team.

- **EFil+**: 
    - Applications that are part of the E-Fil+ pipeline (read more at: https://efilplus.super.site/) will have this label.
    
## DataCap tranche size calculations

- First allocation: lesser of 5% of total DataCap requested or 50% of weekly allocation rate
- Second allocation: lesser of 10% of total DataCap requested or 100% of weekly allocation rate
- Third allocation: lesser of 20% of total DataCap request or 200% of weekly allocation rate
- Fourth allocation: lesser of 40% of total DataCap requested or 400% of weekly allocation rate
- Fifth allocation onwards: lesser of 80% of total DataCap request or 800% of weekly allocation rate


### Granting DataCap to the client
The bot will post a comment with the following structure to kick off a request for DataCap allocation:

```
## DataCap Allocation requested

#### Multisig Notary address
> <addr1>

#### Client address
> <addr2>

#### DataCap allocation requested
> XTiB

#### Id
> Id
```

This initiates a proposal to the multisig Notary to grant the associated amount of DataCap to the <addr2> client address. Other notaries will now see this in the Filecoin Plus Registry app where they can approve or decline the request. 
  
  In order to approve the request in the [Fil+ Registry App](https://plus.fil.org/), Notaries need to sign in with their Ledger. During this initial authorization, the app will check if the Ledger address is an approved signer on the large dataset multisig notary addresses (previously, the Organization). Notaries can then action and sign multiple large requests in a row, without needing to re-auth for each multisig.
  
All notaries signing onto the LDN multisig are encouraged to track the client's use of previous DataCap allocations using on-chain information, data available on chain browsers, or on Fil+ specific dashboards like https://filplus.d.interplanetary.one/ or https://filplus.info/.
  
## FVM Smart Contracts
Smart contracts can acquire DataCap just like any regular client. To do so, simply enter the f410 address of the smart contract that requires DataCap as the client address when making a request.

The process outlined above is for larger amounts of Datacap > 500 TiBs. For a smart contract's first DataCap allocation, we recommend using auto-verifier [Verify.glif.io](Verify.glif.io) to get 32 GiB of DataCap, as specified [here](https://docs.filecoin.io/store/filecoin-plus/overview/).

It's important to note that DataCap allocations are a one-time credit for a Filecoin address and cannot be transferred between smart contracts. If you need to redeploy the smart contract, you must request additional DataCap. To improve this experience, we are developing an FRC to allow DataCap to be held between redeployments. 
  
## Current status

New applications are being accepted at this time, though please expect that the process will likely have some issues as we continue to test and improve the functionality of the process.

## Retrieval Guidelines for Data Clients

1. Fil+ data clients are advised to meticulously choose SPs that align with their specific data retrieval requirements.
2. Fil+ open dataset clients commit to ensuring the retrievability of open datasets by storing with SPs that serve HTTP retrievals with either [booster-http](https://boost.filecoin.io/http-retrieval/serving-files-with-booster-http) or their custom tooling.
3. Fil+ clients can enhance their reputation by holding their SPs accountable for retrievability. This may streamline acquisition of additional DataCap in the future.
4. Fil+ Notaries will consider the client’s track record on retrievability as part of their due diligence.
5. Data clients and SPs should be aware of the risk of network attacks, and mitigate these risks via rate limiting tools (e.g. set a max requests per second limit).
6. Data clients and SPs should consider implementing a throttling limit that determines the maximum bandwidth a single retrieving client can consume at any given time.
7. Private data clients (E Fil+) should store with SPs that provide a level of retrievability consistent with the data clients’ retrieval needs indicated on the DataCap application.
8. In the event of a large retrieval size, SPs should leverage tooling for load balancing to protect themselves.
9. Multiple SPs can share a single unsealed copy of data with the same CID. This practice is deemed acceptable as it optimizes time and resource utilization.
10. If the data client has very good (95-100%) retrievability track record via another retrieval method (GraphSync or BitSwap), then the data client may work with Notaries to get future DataCap approval on a case-by-case basis.
