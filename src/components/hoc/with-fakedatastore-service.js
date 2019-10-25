import React from 'react';
import { FakeDataServiceConsumer } from '../fakedatastore-service-context';

const withFakeDataService = () => (Wrapped) => {

  return (props) => {
    return (
      <FakeDataServiceConsumer>
        {
          (fakeDataService) => {
            return (<Wrapped {...props}
                     fakeDataService={fakeDataService}/>);
          }
        }
      </FakeDataServiceConsumer>
    );
  }
};

export default withFakeDataService;
