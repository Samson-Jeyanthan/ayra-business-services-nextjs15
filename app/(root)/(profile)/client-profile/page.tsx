import { auth } from "@/auth";
import {
  ClientOne,
  ClientTwo,
  ClientThree,
  ClientFour,
  ClientFive,
} from "@/components/profile";
import { getClientRegInfoByUserId } from "@/lib/actions/client.action";
import { redirect } from "next/navigation";

const ClientProfile = async () => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  const response = await getClientRegInfoByUserId({ userId: "" });
  if (!response?.success || !response.data) {
    return <p>No client info found.</p>;
  }

  const client = response.data;

  if (!client) {
    return <p>No client info found.</p>;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { stepOne, stepTwo, stepThree, stepFour, stepFive } = client as any;

  console.log(stepThree?.data, "page.tsx");

  return (
    <main className="min-h-screen justify-start w-full flex flex-col items-center">
      <section className="w-full max-w-[90rem] flex flex-col items-center mt-24 gap-6">
        <ClientOne data={stepOne?.data} />
        <ClientTwo data={stepTwo?.data} />
        <ClientThree data={stepThree?.data} />
        <ClientFour data={stepFour?.data} />
        <ClientFive data={stepFive?.data} />
      </section>
    </main>
  );
};

export default ClientProfile;
