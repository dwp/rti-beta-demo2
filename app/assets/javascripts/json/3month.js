var data =[  {
  "name"        : "John Smith",
  "nino"        : "ABC123456C",
  "earnings"  : [
    {
      "Employer Name 1"       : "EMPLOYERK",
      "Employer Name 2"       : "EEE SERVICE TRUST",
      "Employment_Start_Date" : "",
      "Employment_End_Date"   : "09/05/2013",
      "payments"              : [
      {
        "Record_Type": "1",
        "Tax Year": "14-15",
        "Tax Year Indicator ": "C",
        "HMRC_Office_Number": "652",
        "Employer_PAYE_Ref": "AZ43759",
        "Employer Name 1": "EMPLOYERT",
        "Employer Name 2": "",
        "Unique Employment Sequence Number": "5",
        "Payroll Id": "N198",
        "Employment_Start_Date": "",
        "Employment_End_Date": "",
        "Taxable_Pay": "81.84",
        "Value_of_payments": "",
        "Value_of_deductions_from_net_pay": "49.44",
        "Pay_after_statutory_deductions": "",
        "Value_of_benefits": "",
        "Value_of_employee_pension": "",
        "Items_subject_to_tax_or_NIC": "",
        "Value_of_pension": "",
        "Value_of_tax_deducted": "32.4",
        "Gross_earnings_for_NICs": "0",
        "Employees_contributions": "0",
        "Taxable_pay_to_date": "736.56",
        "Total_tax_to_date": "179.2",
        "Employees_contributions_due": "0",
        "Number_of_normal_hours": "E",
        "Pay_Frequency": "M1",
        "Payment_Date": "24/12/2014",
        "Tax_Week_No": "",
        "Tax_Month_No": "9",
        "Number_of_earnings_period(s)": "1",
        "Indicator that the payment is a payment after date of notification of contract ending": "",
        "Irregular_Payment_Indicator": "Y",
        "Merger_Indicator": "",
        "Unique_Payment_Id": "1407470008",
        "Payment_Confidence_Status": "3",
        "Occupational_Pension_Indicator": "Y",
        "On_Strike_Indicator": "",
        "Unpaid_Absence_Indicator": "",
        "Benefits_Value": "",
        "Employee_Pension_Contribution": "",
        "Pension_Not_Paid_under_net_pay": "",
        "Tax_Code_Operated": "D0",
        "Mutliple IPS Indicator": "",
        "BACS Payment Amount": "",
        "Statutory Maternity Pay YTD": "",
        "NI Letter": "X",
        "DirectorÕs NIC": "",
        "Late PAYE Reporting Reason": "",
        "Scheme Exempt Indicator": "N",
        "Flexibly accessing pension rights": "N"
       }
      ]
     }
   ]
}
]

exports.getTableData = function() {
  return data;
}
