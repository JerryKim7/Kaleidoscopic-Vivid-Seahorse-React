import React from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className="faq1-faq7 thq-section-padding">
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="faq1-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p className="faq1-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="thq-body-small">{props.faq1Answer}</span>
          </div>
          <div className="faq1-list-item2">
            <p className="faq1-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="thq-body-small">{props.faq2Answer}</span>
          </div>
          <div className="faq1-list-item3">
            <p className="faq1-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="thq-body-small">{props.faq3Answer}</span>
          </div>
          <div className="faq1-list-item4">
            <p className="faq1-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="thq-body-small">{props.faq4Answer}</span>
          </div>
          <div className="faq1-list-item5">
            <p className="faq1-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-content1">
            <h2 className="thq-heading-2">{props.heading2}</h2>
            <p className="faq1-text3 thq-body-large">{props.content2}</p>
          </div>
          <div className="faq1-container">
            <button className="thq-button-outline faq1-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  faq4Question: 'Могу ли я вернуть товар?',
  faq1Question: 'Как я могу сделать заказ?',
  heading2: 'Still have a question?',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  faq2Answer:
    'Мы принимаем оплату наличными при получении, банковским переводом и онлайн-платежами через платежные системы.',
  faq5Answer:
    'Вы можете связаться с нашей службой поддержки по телефону, электронной почте или через форму обратной связи на сайте.',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  heading1: 'FAQs',
  faq5Question: 'Как связаться с поддержкой?',
  faq4Answer:
    'Да, вы можете вернуть товар в течение 14 дней с момента покупки при соблюдении условий возврата.',
  action1: 'Contact',
  faq3Question: 'Как происходит доставка?',
  faq2Question: 'Каковы способы оплаты?',
  faq3Answer:
    'Доставка осуществляется курьерскими службами или почтой. Сроки и стоимость доставки зависят от вашего региона.',
  faq1Answer:
    'Для оформления заказа выберите нужный товар и добавьте его в корзину. После этого перейдите в корзину и оформите заказ, указав необходимую информацию для доставки.',
}

FAQ1.propTypes = {
  faq4Question: PropTypes.string,
  faq1Question: PropTypes.string,
  heading2: PropTypes.string,
  content2: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq5Answer: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  faq5Question: PropTypes.string,
  faq4Answer: PropTypes.string,
  action1: PropTypes.string,
  faq3Question: PropTypes.string,
  faq2Question: PropTypes.string,
  faq3Answer: PropTypes.string,
  faq1Answer: PropTypes.string,
}

export default FAQ1
