import { screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";



describe('Sidebar', () => {
    test('Test ', () => {
        componentRender(<Sidebar />);
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
