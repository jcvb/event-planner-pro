import menuOptions from "../../data/menuOptions";

export default function Menu() {
  return (
    <>
      <ul className="flex">
        {menuOptions.map((item) => (
          <li key={item.name}>
            <a className="px-2 mx-2 hover:text-epp-primary" href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
