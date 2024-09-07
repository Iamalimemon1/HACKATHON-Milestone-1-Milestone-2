function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        if (section.classList.contains('show')) {
            section.classList.remove('show');
        }
        else {
            section.classList.add('show');
        }
    }
}
