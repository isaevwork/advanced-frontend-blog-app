import { screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";
import { renderWithTranslation } from "shared/lib/helpers/renderWithTranslation/renderWithTranslation";



describe('Sidebar', () => {
    test('Test ', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    // test('Test toggle Sidebar', () => {
    //     renderWithTranslation(<Sidebar />);
    //     const toggleBtn = screen.getByTestId("sidebar-toggle");
    //     expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    //     fireEvent.click(toggleBtn);
    //     expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    // });
});
