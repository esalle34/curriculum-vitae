export interface Props {
  hardSkills: string;
  languages: string;
  french: string;
  english: string;
  spanish: string;
}

const ProfileSkills = ({
  hardSkills,
  languages,
  french,
  english,
  spanish,
}: Props) => (
  <div className="bg-blue-800 border-blue-800 border-t-2 rounded-t md:rounded-none text-white p-3">
    <p className="text-xl pb-4 text-center font-semibold">{hardSkills}</p>
    <ul className="text-sm">
      <li className="flex justify-between">
        Javascript
        <span className="flex">
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
        </span>
      </li>
      <li className="flex justify-between">
        CSS
        <span className="flex">
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
        </span>
      </li>
      <li className="flex justify-between">
        React
        <span className="flex">
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
        </span>
      </li>
      <li className="flex justify-between">
        Typescript
        <span className="flex">
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
        </span>
      </li>
      <li className="flex justify-between">
        Next
        <span className="flex">
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
        </span>
      </li>
    </ul>
    <p className="text-xl py-4 text-center font-semibold">{languages}</p>
    <ul>
      <li className="flex justify-between">
        {french}
        <span className="flex">
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
        </span>
      </li>
      <li className="flex justify-between">
        {english}
        <span className="flex">
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
        </span>
      </li>
      <li className="flex justify-between">
        {spanish}
        <span className="flex">
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
          <img src="/images/yellowStar.png" width={20} />
        </span>
      </li>
    </ul>
  </div>
);

export default ProfileSkills;
