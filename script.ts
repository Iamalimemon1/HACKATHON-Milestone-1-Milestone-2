function toggleSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
        if (section.classList.contains('show')) {
            section.classList.remove('show');
        } else {
            section.classList.add('show');
        }
    }
}