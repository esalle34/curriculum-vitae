import { decodeTranslation } from "@/app/locales/helpers";
import parse from "html-react-parser";

interface Props {
  title: string;
  introduction: string;
  work: ReadonlyArray<string>;
}

const ExperienceBlock = ({ title, introduction, work }: Props) => {
  return (
    <section className="flex flex-col border-2 rounded-xl shadow-md">
      <h3 className="flex text-blue-800 font-bold italic p-4 text-2xl mb-4 border-b-2 justify-between items-center">
        {parse(
          decodeTranslation({
            translation: title,
            options: {
              htmlTag: "span",
              className: "pl-4 text-base text-blue-500",
            },
          })
        )}
      </h3>
      <p className="text-blue-500 px-4 leading-8">{introduction}</p>
      <ul className="p-4 md:pl-8">
        {work.map((line, index) => (
          <li className="text-gray-600 leading-8 text-sm" key={`work-${index}`}>
            {line}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceBlock;
