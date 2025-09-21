from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:5173/")

    # Scroll to the Featured Projects section and take a screenshot
    projects_section = page.locator("#projects")
    projects_section.scroll_into_view_if_needed()
    page.wait_for_timeout(2000) # wait for animations
    projects_section.screenshot(path="jules-scratch/verification/projects_animation.png")

    # Scroll to the Certifications section and take a screenshot
    certifications_section = page.locator("#certificates")
    certifications_section.scroll_into_view_if_needed()
    page.wait_for_timeout(3000) # wait for animations
    certifications_section.screenshot(path="jules-scratch/verification/certifications_animation.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
