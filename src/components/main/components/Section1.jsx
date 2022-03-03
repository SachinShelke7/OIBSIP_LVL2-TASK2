import Image from "next/image";
import React from "react";
import { Element } from "react-scroll";
import shivneri from "../../../assets/images/shivneri.jpg";

const Section1 = () => {
  return (
    <Element name="biography">
      <div id="biography">
        <div className="flex justify-between mx-20 items-center space-x-5 border-b py-20">
          <div className="w-1/2 text-2xl text-orange-500 font-medium text-center">
            Biography
          </div>
          <div className="w-1/2">
            Chhatrapati Shivaji Maharaj was brave and had an immaculate
            personality in Indian history. Shivaji Maharaj was the warrior king
            and famous for his bravery, tactics and administrative skills. He
            always focussed on Swarajya and Maratha heritage. He was the
            descendant of the 96 Maratha Clans well known as Kshatriyas or brave
            fighters.
          </div>
        </div>

        <div className="flex justify-between mx-20 py-20 items-center space-x-5 border-b">
          <div className="w-1/2">
            <h1 className="text-2xl text-orange-500 font-medium">
              Birth, Family, and Early Life
            </h1>
            Born in Pune’s Shivneri Fort in 1630 on February 19, Shivaji was the
            son of Shahji Bhosle and Jija Bai. He was brought up at Poona under
            the supervision of his mother and Brahmin Dadaji Konda-dev who made
            an expert soldier and an efficient administrator. His administration
            was largely influenced by Deccan administrative practices. He
            appointed eight ministers who were called ‘Astapradhan’ who assists
            him in the administrative helm of affairs. The beginning of the 17th
            century witnessed the rise of new Warrior class Marathas when the
            Bhonsle family of the Poona district got military as well as a
            political advantage by the Ahmadnagar kingdom that gets the
            advantage of being local. Therefore, they took privileges and
            recruited a large number of Maratha sardars and soldiers in their
            armies. Shivaji was the son of Shahji Bhosle and Jija Bai. Shivaji
            was brought up at Poona under the supervision of his mother and an
            able Brahmin Dadaji Konda-dev. Dadaji Konda-dev made Shivaji an
            expert soldier and an efficient administrator. He also came under
            the religious influ­ence of Guru Ramdas, which made him proud of his
            motherland.
          </div>
          <div className="">
            <Image
              src={shivneri}
              alt="shivneri"
              width={600}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Section1;
