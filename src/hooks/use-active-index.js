import { useState } from 'react';

export default function useActiveIndex(data) {
  const [active, setActive] = useState(0);

  function incrementActiveIndex() {
    if (active < data.length - 1) {
      setActive(active + 1);
    }
  }

  function decrementActiveIndex() {
    if (active > 0) {
      setActive(active - 1);
    }
  }

  return {
    active, setActive, incrementActiveIndex, decrementActiveIndex,
  };
}
