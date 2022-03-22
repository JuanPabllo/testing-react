import { render, waitFor } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import List from './List';

describe('List Component', () => {
  it('should render list items', () => {
    const { getByText } = render(
      <List initialItems={['Juan', 'Ana', 'Luna']} />
    );

    expect(getByText('Juan')).toBeInTheDocument();
    expect(getByText('Ana')).toBeInTheDocument();
    expect(getByText('Luna')).toBeInTheDocument();
  });

  it('should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText, findByText } = render(
      <List initialItems={[]} />
    );
    const inputElement = getByPlaceholderText('Novo item');
    const addButton = getByText('Adicionar');

    useEvent.type(inputElement, 'Novo');
    useEvent.click(addButton);

    await waitFor(async () => {
      expect(getByText('Novo')).toBeInTheDocument();
    });

    // expect(await findByText('Novo')).toBeInTheDocument();
  });

  it('should be able to remove item from the list', async () => {
    const { queryByText, getAllByText } = render(
      <List initialItems={['Juan', 'Ana', 'Luna']} />
    );

    const removeButton = getAllByText('Remover');

    useEvent.click(removeButton[0]);

    // await waitForElementToBeRemoved(() => {
    //   return getByText('Juan');
    // });

    await waitFor(() => {
      expect(queryByText('Juan')).not.toBeInTheDocument();
    });
  });
});
