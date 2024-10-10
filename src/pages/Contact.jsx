import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
    <div className="bg-gray-900 bg-opacity-70  rounded-lg min-h-[500px] min-w-[500px] shadow-lg p-8 max-w-sm w-full">

    <ContactForm/>
    </div>
    </div>
  )
}

export default Contact