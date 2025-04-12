import SectionTitle from "../shared/SectionTitle";

const Location = () => {
  return (
    <div className="w-full rounded-lg bg-[#e8eaed] shadow-xl shadow-mist/70 my-12 overflow-hidden">
      {/* Optional title */}
      {/* <SectionTitle title={'Locate us'}/> */}

      <div className="relative w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.8941232427132!2d77.6690161!3d27.5657962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736e1bf20fde49%3A0x1584d520462a4b3c!2sKoshda%20Mandakini!5e0!3m2!1sen!2sin!4v1744494252698!5m2!1sen!2sin"
          className="absolute top-0 left-0 w-full h-full border-0"
          loading="lazy"
        ></iframe>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.8941232427132!2d77.6690161!3d27.5657962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736e1bf20fde49%3A0x1584d520462a4b3c!2sKoshda%20Mandakini!5e0!3m2!1sen!2sin!4v1744494252698!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
    </div>
  );
};

export default Location;
