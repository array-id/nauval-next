import SectionParagraph from "./SectionParagraph"
import SectionTitle from "./SectionTitle"

export default function Profile() {
    return (
        <section className="py-28" id="profile">
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Profile</SectionTitle>
                <SectionParagraph>Mengenal saya secara singkat.</SectionParagraph>

                <div className="flex lg:items-center md:items-start flex-wrap xl:w-9/12 mx-auto mt-10">
                    <div className="md:w-5/12 w-full px-10 mb-10 md:mb-0">
                        <img src="/profile.png" className="w-full" />
                    </div>
                    <div className="md:w-7/12 w-full px-10">
                        <p className="text-lg leading-relaxed">Aliquam blandit leo lorem, nec vehicula mi accumsan posuere. Duis condimentum ornare ante a posuere. Aliquam sem magna, sodales quis congue vel, congue nec nisi. Aenean nec lorem et dolor aliquet ullamcorper eu at sapien. Sed pretium mauris dui. Phasellus mollis accumsan tempus. Proin laoreet hendrerit ligula, id lacinia eros. Aenean consequat, felis eu malesuada lobortis, augue nisl faucibus ligula, id viverra mi erat at nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ac aliquet eros.</p>
                        <p className="text-lg mt-6 leading-relaxed">Aliquam a fringilla metus. Fusce ut tortor ut sem sagittis convallis. Morbi et augue sed nisl fermentum dictum eget ut nisl. Mauris ut dolor posuere augue porta lobortis nec sed lacus. Curabitur dignissim ac lorem in tempor. Morbi id dui quis ex malesuada mattis. Suspendisse potenti. Nulla euismod diam ut risus mollis, id vehicula nulla dictum.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
