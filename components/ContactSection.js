import Button from "./Button";
import ContactItem from "./ContactItem";
import Field from "./Field";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
    return (
        <section className="container mx-auto px-10 2xl:px-0" id="contact">
            <div className="bg-primarygray flex rounded-lg flex-wrap">
                <div className="md:w-6/12 w-full md:border-r border-b border-primarygray-200">
                    <div className="lg:py-16 lg:px-20 md:p-14 p-10">
                        <SectionTitle left>Contact</SectionTitle>
                        <SectionParagraph left>Beberapa cara menghubungi saya.</SectionParagraph>

                        <ContactItem 
                            label="Mail"
                            value="hi@nauv.al"
                            icon="/mail.svg"
                            className="mt-10"
                        />
                        <ContactItem 
                            label="Phone"
                            value="081234567890"
                            icon="/phone.svg"
                            className="mt-6"
                        />
                        <ContactItem 
                            label="Twitter"
                            value="@mhdnauvalazhar"
                            icon="/twitter.svg"
                            className="mt-6"
                        />
                    </div>
                </div>
                <div className="md:w-6/12 w-full">
                    <form className="lg:py-16 lg:px-20 md:p-14 p-10">
                        <div className="flex flex-wrap -mx-4">
                            <div className="lg:w-6/12 w-full px-4">
                                <Field 
                                    label="Name"
                                    name="name"
                                    type="text"
                                />
                            </div>
                            <div className="lg:w-6/12 w-full px-4">
                                <Field 
                                    label="Email"
                                    name="email"
                                    type="text"
                                />
                            </div>
                        </div>
                        <Field 
                            label="Subject"
                            name="subject"
                            type="text"
                        />
                        <Field 
                            label="Message"
                            name="message"
                            type="textarea"
                            className="h-40"
                        />
                        <div className="text-right">
                            <Button variant="black">Send</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
