import './FAQ.css'

const FAQ = () => (
  <article id='faq' className='faq' typeof='FAQPage'>
    <h2 property='name' className='faq_title'>
      Frequently Asked Questions
    </h2>
    <div className='faq_content'>
      <section className='faq_section'>
        <header className='faq_header'>
          <h3 className='faq_question'>How does DuckDuckGo make money?</h3>
        </header>
      </section>
    </div>
  </article>
)

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ
