import React from "react";
import { FaBed, FaFemale, FaUsers } from "react-icons/fa";

type Props = {};

const CVRaman = (props: Props) => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 p-4">
        <img
          src="https://www.nitrkl.ac.in/assets/images/halls/cvr.png"
          alt="C. V. Raman Hall of Residence"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-1/2 p-4 flex flex-col item-centre justify-center ">
        <h1 className="text-4xl font-bold mb-4">
          C. V. Raman Hall of Residence
        </h1>
        <div className="flex items-center text-red-600 mb-4">
          <FaBed className="mr-2" />
          <span className="mr-4">Single Seater; Female</span>
          <FaUsers className="mr-2" />
          <span>700</span>
        </div>
        <p className="text-lg">
          CV Raman Hall is one of the two hostels which is abode to the female
          students of NIT Rourkela. The hostel constitutes of around 700 rooms:
          single rooms, twin rooms and dormitories, accommodating around 800
          boarders. The CVR Hall mess is fairly large and spacious as it caters
          to a rather huge population. With 34 ten-seater tables, it can house a
          total of 340 boarders at a time.
        </p>
      </div>
    </div>
  );
};

const DBAmbani = (props: Props) => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 p-4 flex flex-col item-centre justify-center ">
        <h1 className="text-4xl font-bold mb-4">
          Dhirubhai Ambani Hall of Residence
        </h1>
        <div className="flex items-center justify-end text-red-600 mb-4">
          <FaBed className="mr-2" />
          <span className="mr-4">Single/Shared Seater; Male</span>
          <FaUsers className="mr-2" />
          <span>300</span>
        </div>
        <p className="text-lg">
          Dhirubhai Ambani Hall of Residence is an abode to 300+ residents from
          all years except the freshmen. It has always been a popular choice
          among the students owing to its spacious rooms and its proximity to
          the Academic area as well as other places of importance. It highly
          resembles GDB Hall in terms of its structural planning. DBA is an
          adobe to 354 residents distributed in 3 blocks A, B, and C. The hall
          has a reading room on the ground floor with the fitness room adjacent
          to it.
        </p>
      </div>
      <div className="w-1/2 p-4">
        <img
          src="https://www.nitrkl.ac.in/assets/images/halls/dba.png"
          alt="C. V. Raman Hall of Residence"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

const GDBirla = (props: Props) => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 p-4">
        <img
          src="https://www.nitrkl.ac.in/assets/images/halls/gdb.png"
          alt="C. V. Raman Hall of Residence"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-1/2 p-4 flex flex-col item-centre justify-center ">
        <h1 className="text-4xl font-bold mb-4">
          G. D. Birla Hall of Residence
        </h1>
        <div className="flex items-center text-red-600 mb-4">
          <FaBed className="mr-2" />
          <span className="mr-4">Single/Shared Seater; Male</span>
          <FaUsers className="mr-2" />
          <span>322</span>
        </div>
        <p className="text-lg">
          The Ghanshyam Das Birla Hall of Residence, famously known as the GDB
          Hall is one of the most sought after halls on the campus. Almost one
          in every two first years gets to stay in this hall. With bigger rooms,
          GDB Hall for long has been the preferred choice for students. The
          hostel comprises of three blocks namely A, B, and C. The blocks A and
          B consist of three floors each while C block has four levels. The hall
          has an approximate count of over 300 rooms.
        </p>
      </div>
    </div>
  );
};

const HomiBaba = (props: Props) => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 p-4 flex flex-col item-centre justify-center ">
        <h1 className="text-4xl font-bold mb-4">
          Homi Bhabha Hall of Residence
        </h1>
        <div className="flex items-center justify-end text-red-600 mb-4">
          <FaBed className="mr-2" />
          <span className="mr-4">Single Seater; Male</span>
          <FaUsers className="mr-2" />
          <span>391</span>
        </div>
        <p className="text-lg">
          The most beautiful of all the halls of residences, situated in the
          easternmost part of the Scholar’s Avenue, the facade of Homi Bhaba
          Hall of Residence stands tall among its akin. It is comprised of two
          blocks namely the A block and the B block. Both of these blocks have
          taken up a square-shaped structure. Spread across the two sides of the
          central entrance are these blocks. The blocks are also connected by a
          single-flanked C-block from the back. Each of the blocks has been
          fashioned in a way that spans three floors.
        </p>
      </div>
      <div className="w-1/2 p-4">
        <img
          src="https://www.nitrkl.ac.in/assets/images/halls/hbh.png"
          alt="C. V. Raman Hall of Residence"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

const KMShaw = (props: Props) => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 p-4">
        <img
          src="https://www.nitrkl.ac.in/assets/images/halls/kms.png"
          alt="C. V. Raman Hall of Residence"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-1/2 p-4 flex flex-col item-centre justify-center ">
        <h1 className="text-4xl font-bold mb-4">
          Kiran Majumdar Shaw Hall of Residence
        </h1>
        <div className="flex items-center text-red-600 mb-4">
          <FaBed className="mr-2" />
          <span className="mr-4">Single/Shared Seater; Female</span>
          <FaUsers className="mr-2" />
          <span>300</span>
        </div>
        <p className="text-lg">
          Situated far away from the bustling academic and hostel areas, Kiran
          Majumdar Shaw Hall of Residence is one of the most sought after female
          boarding abode of the Institute. Ranging over 4 blocks, KMS homes
          around 450 residents comprising of BTech, MTech, MBA, MSc, Ph.D.
          students, amidst the lush green. The A-block consists of 26
          three-seater rooms, B-block 38 four-seater rooms, C and D block,
          flanked by a common corridor consists in total of 104 two-seater
          rooms.
        </p>
      </div>
    </div>
  );
};
const MSSwaminathan = (props: Props) => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 p-4 flex flex-col item-centre justify-center ">
        <h1 className="text-4xl font-bold mb-4">
          M.S.Swaminathan Hall of Residence
        </h1>
        <div className="flex items-center justify-end text-red-600 mb-4">
          <FaBed className="mr-2" />
          <span className="mr-4">Shared Seater; Male</span>
          <FaUsers className="mr-2" />
          <span>400</span>
        </div>
        <p className="text-lg">
          M.S. Swaminathan Hall of residence can be considered as one of the
          most preferred halls when it comes to ease of accommodation and
          locational advantages. The hall has four blocks A, B, C and D. Blocks
          A, B and C have 84 rooms respectively and block D has 153 rooms making
          a total of 405 rooms. The second years are allotted double-seater
          rooms whereas from the third year, the boarders get single rooms.
        </p>
      </div>
      <div className="w-1/2 p-4">
        <img
          src="https://www.nitrkl.ac.in/assets/images/halls/msh.png"
          alt="C. V. Raman Hall of Residence"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};
const MVisvesvaraya = (props: Props) => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 p-4">
        <img
          src="https://www.nitrkl.ac.in/assets/images/halls/kms.png"
          alt="C. V. Raman Hall of Residence"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-1/2 p-4 flex flex-col item-centre justify-center ">
        <h1 className="text-4xl font-bold mb-4">
          M.Visvesvaraya Hall of Residence
        </h1>
        <div className="flex items-center text-red-600 mb-4">
          <FaBed className="mr-2" />
          <span className="mr-4">Single/Shared Seater; Female</span>
          <FaUsers className="mr-2" />
          <span>255</span>
        </div>
        <p className="text-lg">
          Mokshagundam Visvesvaraya (MV) Hall of Residence is one of the oldest
          halls of residence at NIT Rourkela. Named after the great engineer
          Mokshagundam Visvesvaraya, the hall is also one of the smallest halls
          of residence at NIT Rourkela. The iconic hall is allotted to freshmen-
          B.Tech, M.Tech and PhD students.The entire hall is divided into three
          blocks- A, B and C. A block contains 75 rooms and the other two blocks
          B and C comprise 90 rooms each.
        </p>
      </div>
    </div>
  );
};
const SDhavan = (props: Props) => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 p-4 flex flex-col item-centre justify-center ">
        <h1 className="text-4xl font-bold mb-4">
          Satish Dhawan Hall of Residence
        </h1>
        <div className="flex items-center justify-end text-red-600 mb-4">
          <FaBed className="mr-2" />
          <span className="mr-4">Shared Seater; Male</span>
          <FaUsers className="mr-2" />
          <span>1014</span>
        </div>
        <p className="text-lg">
          Satish Dhawan Hall of Residence, or Hall 9 is spread across the
          largest planned sector on the campus of NIT Rourkela. The hall
          constitutes of 6 residing blocks all 4 storeyed, D block consisting of
          Mess and a common room with a Gymnasium and TV facilitated with
          sitting arrangements, H block as storeroom and kitchen, and I block
          housing the Warden's office. Each block consists of around 40 rooms on
          each floor summing to a total of 40 X 4 X 6= 960 rooms with a total of
          1000 plus boarders residing in them. The hall has a central mess
          connecting all the blocks.
        </p>
      </div>
      <div className="w-1/2 p-4">
        <img
          src="https://www.nitrkl.ac.in/assets/images/halls/sdh.png"
          alt="C. V. Raman Hall of Residence"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

const VSarabhai = (props: Props) => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 p-4">
        <img
          src="https://www.nitrkl.ac.in/assets/images/halls/vsh.png"
          alt="C. V. Raman Hall of Residence"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-1/2 p-4 flex flex-col item-centre justify-center ">
        <h1 className="text-4xl font-bold mb-4">
          Vikram Sarabhai Hall of Residence
        </h1>
        <div className="flex items-center text-red-600 mb-4">
          <FaBed className="mr-2" />
          <span className="mr-4">Single/Shared Seater; Female</span>
          <FaUsers className="mr-2" />
          <span>1024</span>
        </div>
        <p className="text-lg">
          The Vikram Sarabhai Hall of Residence is one of the largest and
          most-sought halls of residence. Ranging over eight blocks, it houses
          over 1000 boarders. The hall consists of 8 blocks with each having 128
          rooms. The sophomores are provided with double-seater rooms, while
          students from third year onwards are allotted single rooms. The Hall
          has a well-decorated reading room. It also has a fully functional gym
          with adequate equipment.The Hall has a well-maintained garden in the
          vast open space at the front, which has benches and pathways for
          boarders.
        </p>
      </div>
    </div>
  );
};

const SSBhatnagar = (props: Props) => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 p-4 flex flex-col item-centre justify-center ">
        <h1 className="text-4xl font-bold mb-4">
          S.S. Bhatnagar Hall of Residence
        </h1>
        <div className="flex items-center justify-end text-red-600 mb-4">
          <FaBed className="mr-2" />
          <span className="mr-4"> Married Student Apartment</span>
          <FaUsers className="mr-2" />
          <span>145</span>
        </div>
        <p className="text-lg">
          The hostel to house married couples in NIT-Rourkela, Shanti Swaroop
          Bhatnagar (SSB) Hall of Residence is currently portraying a very
          peaceful atmosphere for the inmates. S.S Bhatnagar hall consists of
          four blocks: A, B, C, and D, with D block being the recent addition.
          The hall boasts of about 145 rooms. The rooms of D block provide the
          luxury of a balcony and the rooms of C block are equipped with two
          bedrooms. The rooms, as well as the corridors, are spacious enough.
        </p>
      </div>
      <div className="w-1/2 p-4">
        <img
          src="https://www.nitrkl.ac.in/assets/images/halls/ssb.png"
          alt="C. V. Raman Hall of Residence"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

const VKuraen = (props: Props) => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 p-4">
        <img
          src="https://www.nitrkl.ac.in/assets/images/halls/vk.png"
          alt="C. V. Raman Hall of Residence"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-1/2 p-4 flex flex-col item-centre justify-center ">
        <h1 className="text-4xl font-bold mb-4">
          Verghese Kurien Hall of Residence
        </h1>
        <div className="flex items-center text-red-600 mb-4">
          <FaBed className="mr-2" />
          <span className="mr-4"> Married Student Apartment</span>
          <FaUsers className="mr-2" />
          <span>156</span>
        </div>
        <p className="text-lg">
          The latest addition to the halls of residence at NITR is the Verghese
          Kurien Hall of Residence. It is a married scholars' residence and has
          156 quarters in total comprising a kitchen, bedroom, and a balcony.
          The G+5 building is clean and tidy. The hall's basement parking lot
          has a state-of-the-art art fire extinguisher system that uses a set of
          sprinklers in the unfortunate event of a fire.
        </p>
      </div>
    </div>
  );
};
const OutHostels = (props: Props) => {
  return (
    <div>
      <div className="bg-gray-100 text-gray-900 flex justify-center">
        <div className="w-full m-0 sm:m-20 bg-white shadow sm:rounded-lg flex-col justify-center flex-1">
          <div>
            <h1 className="text-5xl font-bold m-9">Our Hostels</h1>
          </div>
          <CVRaman />
          <DBAmbani />
          <GDBirla />
          <HomiBaba />
          <KMShaw />
          <MSSwaminathan />
          <MVisvesvaraya />
          <SDhavan />
          <VSarabhai />
          <SSBhatnagar />
          <VKuraen />
        </div>
      </div>
    </div>
  );
};

export default OutHostels;
