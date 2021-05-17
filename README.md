# Filecoin Plus for large datasets

This repo serves as the hub for client applications for DataCap at a large scale - currently defined as > 500 TiB of DataCap. If you wish to generally learn more about Filecoin Plus or apply for less than 500 TiB of DataCap, check out the following resources: 

- Filecoin Plus documentation: https://docs.filecoin.io/store/filecoin-plus/
- Fil+ community governance repo: https://github.com/filecoin-project/notary-governance/
- Fil+ client on-boarding and DataCap applications: https://github.com/filecoin-project/filecoin-plus-client-onboarding
- Filecoin Plus Registry app: https://plus.fil.org

The process outlined below for clients looking to apply for a large amount of DataCap was initially proposed in [Issue #94 - Onboarding projects with large DataCap requirements](https://github.com/filecoin-project/notary-governance/issues/94). Unlike DataCap applications for smaller allocations, this process results in the creation of a dedicated multi-sig Notary address which allocates DataCap to a specific client in batches. 

## Current scope

Based on the conversation in [Issue #94](https://github.com/filecoin-project/notary-governance/issues/94) and in Fil+ Governance calls, here is the current definition of the scope of the program. Please note that this is still an evolving conversation, so the scope is subject to change in the coming weeks and months. If you would like to participate in this conversation or have feedback, please join the discussion in the parent Issue. 

Clients can currently apply for a **Large Dataset Notary** which can grant them between 500 TiB and 5 PiB of DataCap. Support for DataCap allocations for 
sets through the process outlined and managed through this repo is being run as an initial experiment, for up to a total of 50 PiB of DataCap to be allocated. 

In order for a client and their dataset to be eligible for the request allocation: 

- the dataset should be public, open, and mission aligned with Filecoin and Filecoin Plus. This also means that the data should be accessible to anyone in the network, without requiring any special permissions or access requirement
- stored data should be readily retrievable on the network and this should be regularly verified (though the use of manual or automated verification that includes retrieving data from various miners over the course of the DataCap allocation timeframe)
- there should be no open disputes in the Fil+ ecosystem against the client during the time that the application is open for review
- a single dataset can only be eligible for a single active Large Dataset Notary 

If you are a client who is interested in applying for a large DataCap allocation via an LDN, please see the steps outlined below.

## Applying for a large DataCap allocation

**Current status: initial implementation and testing**

Application flow: 

1. Client submits an application through creating a GitHub issue in this repo
1. Notaries and community members carry out due diligence over a 2 week period via comments on the issue and in conversation during a Notary Governance call
1. If the community is in agreement that the dataset is in line with the values of the Filecoin Plus program and should be approved for a DataCap allocation. 7 Notaries opt into being signers on the multi-sig Notary (also known as the Large Dataset Notary - LDN), which will serve as a dedicated DataCap faucet for this specific client. At least 3 regions should be represented by this set of Notaries
1. A "lead" Notary is elected to serve as the primary point of contact for the client and as the responsible Notary for ensuring that the client's actions are aligned with the plan outlined in their application. The issue is assigned to this Notary
1. The multi-sig Notary is configured, the Root Key Holders are requested to approve the new Notary and sign this onto the chain 

After this, the client can update the issue asking for (additional) allocations of DataCap. Clients need to have used up > 90% of the prior DataCap allocation before requesting for additional DataCap. The group of Notaries signing onto the LDN have access to Fil+ data required to continue allocating more DataCap, to verify that the client is operating in good faith, in accordance with the principles of the program, and in line with their allocation strategy outlined in the original application. DataCap call be allocated per the following limitations:

- First allocation: lesser of 5% of total DataCap requested or 50% of weekly allocation rate
- Second allocation: lesser of 10% of total DataCap requested or 100% of weekly allocation rate
- Third allocation onwards: lesser of 20% of total DataCap request or 200% of weekly allocation rate


