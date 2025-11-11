import Sample from '@pages/sample/Sample';
import db from '@system/firebase';

export async function getServerSideProps() {
  const data = (await db.collection('home_page').doc('GFeAvqnUrlqpeXEAask1').get()).data();

  return {
    props: {
      data,
    },
  };
}

export default Sample;
