export function Profile() { //export multiple components
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';

  return (
    <>
      <img
        src={avatar}
        alt="Alan L. Hart"
      />
      <p>Something {avatar} something</p>
    </>
  );
}

export default function Gallery() { //only one component
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}