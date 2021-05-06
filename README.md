# Filecoin Plus for large datasets - 500+ TiB of DataCap

This repo serves as the hub for client applications for DataCap at a large scale - currently defined as > 500 TiB of DataCap. If you wish to generally learn more about Filecoin Plus or apply for less than 500 TiB of DataCap, check out the following resources: 

- Filecoin Plus documentation: https://docs.filecoin.io/store/filecoin-plus/
- Fil+ community governance repo: https://github.com/filecoin-project/notary-governance/
- Fil+ client on-boarding and DataCap applications: https://github.com/filecoin-project/filecoin-plus-client-onboarding
- Filecoin Plus Registry app: https://plus.fil.org

The process outlined below for clients looking to apply for a large amount of DataCap was initially proposed in [Issue #94 - Onboarding projects with large DataCap requirements](https://github.com/filecoin-project/notary-governance/issues/94). Unlike DataCap applications for smaller allocations, this process results in the creation of a dedicated multi-sig Notary address which allocates DataCap to a specific client in batches. 

## Applying for a large DataCap allocation

**Current status: initial implementation and testing**

Application flow: 

1. Client submits an application through creating a GitHub issue in this repo
1. Notaries and community members carry out due diligence over a 2 week period via comments on the issue and in conversation during a Notary Governance call
1. If the community is in agreement that the dataset is in line with the values of the Filecoin Plus program and should be approved for a DataCap allocation. 7 Notaries opt into being signers on the multi-sig Notary - which will serve as a dedicated DataCap faucet for this specific client
1. A "lead" Notary is elected to serve as the primary point of contact for the Client and as the responsible Notary for ensuring that the Client's actions are aligned with the plan outlined in their application. The issue is assigned to this Notary
1. The multi-sig Notary is configured, the Root Key Holders are requested to approve the new Notary and sign this onto the chain 
1. After this, the Client can update the issue asking for (additional) allocations of DataCap

