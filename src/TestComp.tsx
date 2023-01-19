import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

const TestComp:FC = props => {
  const [count, setCount] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://nbtserver.cyclic.app/api/books/testcount');
      setCount(data.count)
    }
    fetchData();
  }, []);

  return <div>Hello world, {count} books</div>;
}

export default TestComp;
