"use client";
import Form from "./components/form";
import Results from "./components/results";
import FormProvider from "./context/FormProvider";

export default function Home() {
  return (
    <main className="h-screen w-full bg-light-grey flex justify-center items-center px-5 py-20">
      <div className="bg-white rounded-3xl rounded-br-[100px] h-[68vh] sm:w-[40vw] px-4 sm:px-8 py-12 relative flex flex-col items-center justify-between">
        <FormProvider>
          <Form />
          <Results />
        </FormProvider>
      </div>
    </main>
  );
}
