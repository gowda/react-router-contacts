import { redirect } from 'react-router-dom';
import { deleteContact } from '../contacts';

// eslint-disable-next-line import/prefer-default-export
export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect('/');
}
