import React from 'react'; 
import AccountData from '../../Assets/Data/Account.json';

const Account = () => {
    return (
        < >
            <h2 class="sr-only">Accound</h2>
                    {AccountData.map((account, index) => (
                <section key={index} className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">{account.title}</h3>
                        <p className="account-amount">{account.amount}</p>
                        <p className="account-amount-description">{account.amountDescription}</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">{account.ctaLabel}</button>
                    </div>
                </section>
            ))}
        </>
    );
};

export default Account;
