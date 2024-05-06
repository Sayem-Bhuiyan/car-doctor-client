import parts from '../../../assets/images/about_us/parts.jpg';
import person from '../../../assets/images/about_us/person.jpg';

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content gap-10 items-cetner flex-col lg:flex-row">
        <div className='lg:w-1/2'>
        <div className='relative'>
            <img src={person} alt=""  className='w-3/4 rounded-lg'/>
            <img className='absolute  w-1/2 right-5 top-1/2 border-[10px] shadow-xl rounded-lg border-white' src={parts} alt="" />
        </div>
        </div>
        <div className='lg:w-1/2 space-y-6'>
          <h3 className="text-[#FF3811] text-xl font-bold">About Us</h3>
          <h1 className='text-[#151515] text-5xl font-bold'>We are qualified & of experience in this field</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          <br /><br />
          the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
          </p>
          <button className="btn bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
