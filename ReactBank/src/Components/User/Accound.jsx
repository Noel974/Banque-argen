import React from 'react'; 
import AccountData from '../../Assets/Data/Account.json';

const Account = () => {
    return (
        <section  className="main bg-dark">
                    {AccountData.map((account, index) => (
                <div key={index} className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">{account.title}</h3>
                        <p className="account-amount">{account.amount}</p>
                        <p className="account-amount-description">{account.amountDescription}</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">{account.ctaLabel}</button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Account;
