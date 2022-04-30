from brownie import accounts, network, config, ReportData

# brownie run scripts/deploy.py
# .env account is a throwaway.

def get_account():
    if(network.show_active() == "development"):
        return accounts[0]  # quick test account.
    return accounts.add(config["wallets"]["from_key"]) # actual wallet account.

def deploy_report_data():
    account = get_account()
    report_data_contract = ReportData.deploy({"from": account})

    aString = report_data_contract.viewString()
    print(aString)


def main():
    deploy_report_data()
