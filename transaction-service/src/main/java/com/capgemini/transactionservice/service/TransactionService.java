package com.capgemini.transactionservice.service;

public interface TransactionService {

	public double deposite(int accountId, double amount);

	public double withdraw(int accountId, double amount);

	public void fundtransfer(int senderId, int reciverId, double amount);
}
