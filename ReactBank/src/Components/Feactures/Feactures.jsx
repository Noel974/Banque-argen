import React from 'react';
import FeactureData from'../../Assets/Data/Feacture.json';
import chatIcon from '../../Assets/Logo/icon-chat.png';
import moneyIcon from '../../Assets/Logo/icon-money.png';
import securityIcon from '../../Assets/Logo/icon-security.png';

const Features = () => {
  
  return (
    <section className="features">
      {FeactureData.map((feacture) => (
        <div className="feature-item" key={feacture.id}>
            {feacture.icon === 'icon-chat.png' && <img  className="feature-icon"src={chatIcon} alt={feacture.title} />}
            {feacture.icon === 'icon-money.png' && <img className="feature-icon"src={moneyIcon} alt={feacture.title} />}
            {feacture.icon === 'icon-security.png' && <img className="feature-icon"src={securityIcon} alt={feacture.title} />}
          <h2 className="feature-item-title">{feacture.title}</h2>
          <p>{feacture.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
