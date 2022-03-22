import { useState } from 'react';

type listProps = {
  initialItems: string[];
};

function List({ initialItems }: listProps) {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(initialItems);

  function addToList() {
    setTimeout(() => {
      setList([...list, newItem]);
    }, 500);
  }

  function RemoveFromList() {
    setTimeout(() => {
      setList((state) => state.filter((item) => item !== item));
    }, 500);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Novo item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => RemoveFromList()}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
