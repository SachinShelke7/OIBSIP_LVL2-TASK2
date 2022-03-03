import Image from "next/image";
import React from "react";
import { Element } from "react-scroll";
import { torana, kondana } from "../../../";

const Section2 = () => {
  return (
    <Element name="events">
      <div>
        <h1 className="text-center font-bold text-2xl mt-10">
          Important events in Shri Shivaji Maharaj’s Life
        </h1>
        <div className="flex justify-between mx-20 items-center space-x-5 border-b py-20">
          <div className="w-1/2">
            <Image src={torana} alt="torana" />
          </div>
          <div className="w-1/2">
            <h3 className="text-2xl text-orange-500 font-medium">
              Conquest of Torana
            </h3>
            It was the first fort captured by Shivaji as Chieftain of Marathas
            which led to the foundation of his ruling attributes of valour and
            determination at the age of 16. This conquest drives him to capture
            another like Raigarh and Pratapgarh. Due to these conquests, the
            Sultan of Bijapur was getting panic and he put Shahji,
            Shivaji&apos;s father in prison. In AD 1659, Shivaji again tried to
            attack Bijapur then the Sultan of Bijapur sent his general, Afzal
            Khan, to capture Shivaji. But Shivaji managed to escape and killed
            him with a deadly weapon called Baghnakh or the tiger&apos;s claw.
            Finally, in 1662, the Sultan of Bijapur made a peace treaty with
            Shivaji and made him an independent ruler of his conquered
            territories.
          </div>
        </div>

        <div className="flex justify-between mx-20 items-center space-x-5 border-b py-20">
          <div className="w-1/2">
            <Image
              src={kondana}
              alt="kondana"
              width={600}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="w-1/2">
            <h3 className="text-xl text-orange-500 font-medium">
              Conquest of Kondana fort
            </h3>
            It was under the control of Nilkanth Rao. It was fought between
            Tanaji Malusare, a commander of Maratha ruler Shivaji and Udaybhan
            Rathod, fort keeper under Jai Singh I.
          </div>
        </div>

        <div className="flex justify-between mx-20 items-center space-x-5 border-b py-20">
          <div>IMAGE</div>
          <div className="w-1/2">
            <h3 className="text-xl text-orange-500 font-medium">
              Alliance with Qutub Shahi rulers Golconda
            </h3>
            With the help of this alliance, he led the campaign into Bijapur
            Karanataka (AD 1676-79) and conquered Gingee (Jingi), Vellore and
            many forts in Karnataka.
          </div>
        </div>

        <div className="flex justify-between mx-20 items-center space-x-5 border-b py-20">
          <div>IMAGE</div>
          <div className="w-1/2">
            <h3 className="text-xl text-orange-500 font-medium">
              Coronation of Shivaji
            </h3>
            In AD 1674, Shivaji declared himself as an independent ruler of the
            Maratha Kingdom and was crowned as Chhatrapati at Raigarh. His
            coronation symbolises the rise of people who challenges the legacy
            of the Mughal’s. After the coronation, he gets the title of ‘Haidava
            Dharmodharka’ (Protector of Hindu faith) of the newly formed state
            of Hindavi Swarajya. This coronation gives a legitimate right to
            collect land revenue and levy tax on the people.
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Section2;
