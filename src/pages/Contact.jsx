import ContactForm from '../components/ContactForm'
import contactbanner from '../assets/contact-banner.png'
import FilteringComponent from '../components/Filter/FilteringComponent';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img 
          src={contactbanner} 
          className="hidden md:block w-[400px] saturate-50 "
        />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
