import Wrapper from "@/components/partials/Wrapper";
import PartHeader from "../part/PartHeader";
import HomeVideo from "./HomeVideo";
import HomeLatest from "../part/HomeLatest";

const HomeSticky = () => {
  return (
    <section className='py-24'>
      <Wrapper>
        <div className='grid grid-cols-[3fr_1fr] gap-20'>
          <div className='main'>
            <HomeVideo />
            <HomeLatest />

            <div>
              <PartHeader title="Latest Blog Post"/> 
            </div>



          </div>
          <aside className='sidebar'>xxx</aside>
        </div>
      </Wrapper>
    </section>
  );
};

export default HomeSticky;
