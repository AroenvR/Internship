from brownie import accounts, network, config, ReportData, Report

# brownie run scripts/deploy.py (--network rinkeby)
# .env account is a throwaway.

def get_account():
    if(network.show_active() == "development"): # Development / Production is automatically decided by brownie's run method.
        return accounts[0]  # quick test account.
    return accounts.add(config["wallets"]["from_key"]) # actual wallet account.

def deploy_report_data():
    account = get_account() # returns account's public key.
    report_data_contract = ReportData.deploy({"from": account}) # returns contract's public address.
    print("report_data_contract address: ")
    print(report_data_contract)
    # report_data_contract.updateReports() # I'm stuck here.


def main():
    deploy_report_data()
