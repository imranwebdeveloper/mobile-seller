import { ReduxProviders } from "@/providers/ReduxProvider";
import FormWrapper from "@/components/admin/form/mobile/FormWrapper";

const AddNew = async () => {
  return (
    <section className="mx-auto mb-4 max-w-4xl">
      <ReduxProviders>
        <FormWrapper />
      </ReduxProviders>
    </section>
  );
};

export default AddNew;
