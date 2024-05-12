export interface Props {
  contact: string;
}

const ProfileSocialeMedia = ({ contact }: Props) => (
  <div className="bg-sky-800 border-sky-800 text-white border-b-2 rounded-b p-3">
    <p className="text-xl pb-4 text-center font-semibold">{contact}</p>
    <div className="text-sm flex flex-col gap-4">
      <a
        className="flex justify-between items-center"
        href="https://www.linkedin.com/in/%F0%9F%92%BB-eric-salle-431664109/"
      >
        <img src="/images/LinkedIn_icon.svg" width={30} /> Eric Salle
      </a>
      <a className="flex justify-between items-center" href="tel:+33683790289">
        <img src="/images/smartphone.png" width={30} /> +33 6 83 79 02 89
      </a>
      <a
        className="flex justify-between items-center"
        href="mailto:esalle34@gmail.com"
      >
        <img src="/images/mail.png" width={30} /> esalle34@gmail.com
      </a>
      <a
        className="flex justify-between items-center"
        href="https://github.com/esalle34/curriculum-vitae"
      >
        <img src="/images/github-icon.svg" width={30} />
        <span className="pl-4 text-right">
          https://github.com/esalle34/curriculum-vitae
        </span>
      </a>
    </div>
  </div>
);

export default ProfileSocialeMedia;
