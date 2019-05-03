package com.capgemini.transactionservice.entity;

import java.sql.Time;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "transaction")
public class BankAccountTransaction {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int transactionId;
	private String accountHolderName;
	private String accountType;
	private Date date;
	private Time time;

	public BankAccountTransaction() {
		super();
	}

	public BankAccountTransaction(int transactionId, String accountHolderName, String accountType, Date date,
			Time time) {
		super();
		this.transactionId = transactionId;
		this.accountHolderName = accountHolderName;
		this.accountType = accountType;
		this.date = date;
		this.time = time;
	}

	public int getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}

	public String getAccountHolderName() {
		return accountHolderName;
	}

	public void setAccountHolderName(String accountHolderName) {
		this.accountHolderName = accountHolderName;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Time getTime() {
		return time;
	}

	public void setTime(Time time) {
		this.time = time;
	}

	@Override
	public String toString() {
		return "BankAccountTransaction [transactionId=" + transactionId + ", accountHolderName=" + accountHolderName
				+ ", accountType=" + accountType + ", date=" + date + ", time=" + time + "]";
	}

}
