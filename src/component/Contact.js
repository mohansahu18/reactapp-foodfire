import CONTACT_IMG from "../assets/images/contact us.png"
import ContactForm from "./contactForm"
const Contact = () => {
    return (
        <div className=" flex flex-col md:flex-row items-center">
            <img
                className="h-96 w-96 object-cover md:h-full md:w-1/2"
                src={CONTACT_IMG} alt="contact-img" />
            <ContactForm />
        </div>
    )
}
export default Contact;