### ❗️ This repo is used for testing ❗️

**Large Dataset Application** forms submitted through the development and staging sites of [https://filplus.storage/](https://filplus.storage/) will appear in this repo.

---

# Filecoin Plus for large datasets

This repo serves as the hub for client applications for DataCap at a large scale - currently defined as > 500 TiB of DataCap. If you wish to generally learn more about Filecoin Plus or apply for less than 500 TiB of DataCap, check out the following resources: 

- Filecoin Plus documentation: https://docs.filecoin.io/store/filecoin-plus/
- Fil+ community governance repo: https://github.com/filecoin-project/notary-governance/
- Fil+ client on-boarding and DataCap applications: https://github.com/filecoin-project/filecoin-plus-client-onboarding
- Filecoin Plus Registry app: https://plus.fil.org

The process outlined below for clients looking to apply for a large amount of DataCap was initially proposed in [Issue #94 - Onboarding projects with large DataCap requirements](https://github.com/filecoin-project/notary-governance/issues/94). Unlike DataCap applications for smaller allocations, this process results in the creation of a dedicated multi-sig Notary address which allocates DataCap to a specific client in batches. 

## Current scope

Based on conversations in various issues and governance calls, here is the current scope of the Large Dataset Notary (LDN) program. You can find relevant issues, as well as links to governance call recordings in the [Notary Governance repo](https://github.com/filecoin-project/notary-governance). Please note that this is still an evolving conversation, so the scope is subject to change. If you would like to participate in this conversation or have feedback, please let us know! You can start a discussion topic in the [Notary Governance repo](https://github.com/filecoin-project/notary-governance/discussions), in the [fil-plus](https://filecoinproject.slack.com/archives/C01DLAPKDGX) public Slack channel, or in an upcoming [Governance call](https://calendar.google.com/calendar/embed?src=c_k1gkfoom17g0j8c6bam6uf43j0%40group.calendar.google.com&ctz=America%2FLos_Angeles).

Clients can currently apply for a **Large Dataset Notary** which can grant them between 500 TiB and 5 PiB of DataCap. Support for DataCap allocations for 
sets through the process outlined and managed through this repo is still in early experimental phases, expect changes to the process.

In order for a client and their dataset to be eligible: 

- the dataset should be public, open, and mission aligned with Filecoin and Filecoin Plus. This also means that the data should be accessible to anyone in the network, without requiring any special permissions or access requirement
- stored data should be readily retrievable on the network and this should be regularly verified (though the use of manual or automated verification that includes retrieving data from various miners over the course of the DataCap allocation timeframe)
- there should be no open disputes in the Fil+ ecosystem against the client during the time that the application is open for review
- a single dataset can only be eligible for a single active Large Dataset Notary (some special circumstances and exceptions, such as Slingshot program)

If you are a client who is interested in applying for a large DataCap allocation via an LDN, please see the steps outlined below.

## Applying for a large DataCap allocation

Application flow: 

1. Client submits an application through creating a GitHub issue in this repo
2. Automation + the Fil+ governance team ensures that the application has been fully filled out, and a request is sent to the RKH to set up a Notary (LDN) for this client
3. Notaries and community members carry out due diligence via comments on the issue and in conversation during a Notary Governance call
4. In parallel, RKH are informed of the client application request and approve the multisig LDN to allocate DataCap to this client in tranches
6. If the community is in agreement that the dataset is in line with the values of the Filecoin Plus program and should be approved for a DataCap allocation, 2 notaries approve the request to allocate the first tranche of DataCap

When clients use up > 75% of the prior DataCap allocation, a request for additional DataCap in the form of the next tranche is automatically kicked off ('subsequent allocation bot'). Notaries have access to on-chain data required to verify that the client is operating in good faith, in accordance with the principles of the program, and in line with their allocation strategy outlined in the original application. 2 notaries need to approve the next tranche of DataCap to be allocated to the client. The same notary cannot sign off on immediately subsequent allocations of DataCap, i.e., you need at minimum 4 notaries to support your application on an ongoing basis to receive multiple tranches of DataCap. 

## DataCap allocation calculations

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
```

This initiates a proposal to the multisig Notary to grant the associated amount of DataCap to the <addr2> client address. Other notaries will now see this in the Filecoin Plus Registry app where they can approve or decline the request. 
  
  In order to approve the request in the [Fil+ Registry App](https://plus.fil.org/), Notaries need to sign in with their Ledger. During this initial authorization, the app will check if the Ledger address is an approved signer on the large dataset multisig notary addresses (previously, the Organization). Notaries can then action and sign multiple large requests in a row, without needing to re-auth for each multisig.
  
All notaries signing onto the LDN multisig are encouraged to track the client's use of previous DataCap allocations using on-chain information, data available on chain browsers, or on Fil+ specific dashboards like https://filplus.d.interplanetary.one/ or https://filplus.info/.
  
## Current status

New applications are being accepted at this time, though please expect that the process will likely have some issues as we continue to test and improve the functionality of the process.
