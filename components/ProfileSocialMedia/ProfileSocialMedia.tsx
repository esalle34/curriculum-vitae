export interface Props {
  contact: string;
}

const ProfileSocialeMedia = ({ contact }: Props) => (
  <div className="bg-blue-800 border-blue-800 text-white border-b-2 md:border-0 rounded-b md:rounded-none p-3">
    <p className="text-xl pb-4 text-center font-semibold">{contact}</p>
    <div className="text-sm flex flex-col gap-4">
      <a
        className="flex justify-between items-center"
        href="https://www.linkedin.com/in/%F0%9F%92%BB-eric-salle-431664109/"
      >
        <img src="/images/LinkedIn_icon.svg" width={30} /> Eric Salle
      </a>
      <a className="flex justify-between items-center" href="tel:+33683790289">
        <img src="/images/smartphone.svg" width={30} /> +33 6 83 79 02 89
      </a>
      <a
        className="flex justify-between items-center"
        href="mail:esalle34@gmail.com"
      >
        <img src="/images/mail.svg" width={30} /> esalle34@gmail.com
      </a>
    </div>
  </div>
);

export default ProfileSocialeMedia;
