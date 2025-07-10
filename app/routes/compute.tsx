import { Form, useActionData, useNavigation } from 'react-router';
import type { Route } from './+types/compute';

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  try {
    const one = parseFloat(values.one.toString());
    const two = parseFloat(values.two.toString());

    return {
      result: one * two,
    };
  } catch (error) {
    return new Response('Wrong inputs', { status: 400 });
  }
}

export default function Compute() {
  const data = useActionData<typeof action>();

  return (
    <>
      <h1>Compute</h1>
      <Form method="post">
        <div className="w-full">
          <input className="border" type="text" name="one" />
          <span>*</span>
          <input className="border" type="text" name="two" />
          <span>=</span>
          <span className="border min-w-16">
            result:&nbsp;{data ? data.result : null}
          </span>
        </div>
        <button
          className="px-4 border rounded bg-blue-600 text-white"
          type="submit"
        >
          compute
        </button>
      </Form>
    </>
  );
}
