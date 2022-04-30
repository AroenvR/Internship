from brownie import accounts, config, ReportData

def read_contract():
    report_data_contract = ReportData[-1]
    print(report_data_contract.viewString())

def main():
    read_contract()