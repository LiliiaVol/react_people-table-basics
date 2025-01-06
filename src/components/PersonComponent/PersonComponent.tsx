import classNames from 'classnames';
import { PersonLink } from '../PersonLink/PersonLink';
import { Person } from '../../types';
import { useParams } from 'react-router-dom';

type Props = {
  person: Person;
  people: Person[];
};

export const PersonComponent = (props: Props) => {
  const { person, people } = props;
  const { slug, sex, born, died, fatherName, motherName } = person;
  const { personID } = useParams();

  const findPerson = (name: string): Person | undefined => {
    return people.find(neededPerson => neededPerson.name === name);
  };

  const renderPersonLink = (name: string) => {
    const neededPerson = findPerson(name);

    if (neededPerson) {
      return <PersonLink person={neededPerson} />;
    }

    return name;
  };

  return (
    <tr
      data-cy="person"
      key={slug}
      className={classNames({
        'has-background-warning': personID === slug,
      })}
    >
      <td>
        <PersonLink person={person} />
      </td>

      <td>{sex}</td>
      <td>{born}</td>
      <td>{died}</td>
      <td>{motherName ? renderPersonLink(motherName) : '-'}</td>
      <td>{fatherName ? renderPersonLink(fatherName) : '-'}</td>
    </tr>
  );
};
