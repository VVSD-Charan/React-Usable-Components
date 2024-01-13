import React from 'react';
import '../../../App.css';
import Accordion from '../../Accordion/Accordion';

export default function Home() {
  return (
    <>
      <div className='home'>
        <div>
          <p>
            We provide a Collaborative Small Business Funding Platform to overcome business loan rejections. Our platform acts as a one-stop solution, bringing together banks, non-banking financial companies (NBFCs), private banks, and other financial institutions. Specifically designed for Micro, Small, and Medium Enterprises (MSMEs), it streamlines the funding process. Entrepreneurs visiting our platform gain access to a centralized hub for resources, guidance, and tailored financing options. We provide educational materials to enhance business knowledge and simplify the complexities of establishing a successful venture. Our platform fosters connections between businesses and a diverse array of lenders, including banks and NBFCs, maximizing the chances of securing funds. No more grappling with multiple loan applications and rejections. By fostering collaboration among different financial institutions, we enhance fund availability and accessibility. Empowering entrepreneurs with knowledge and facilitating connections with lenders, our collaborative small business funding platform aims to transform challenges into opportunities, promoting the success and growth of MSMEs. Say goodbye to the hurdles of securing financing and hello to a comprehensive and supportive ecosystem for small business owners on our platform.
          </p>
        </div>
      </div>

      <Accordion />
    </>
  );
}
