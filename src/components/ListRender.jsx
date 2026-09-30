import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias"]);

  // Agora cada usuário possui um id estável.
  const [users] = useState([
    { id: 1, name: "Matheus", age: 31 },
    { id: 2, name: "Jones", age: 19 },
    { id: 3, name: "Scorpion", age: 201 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    // Recebe o estado anterior e cria um NOVO array sem o usuário sorteado.
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;