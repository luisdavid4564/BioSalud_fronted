import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'app-menu',
    imports: [RouterModule],
    templateUrl: './menu.html',
    styleUrl: './menu.css'
})
export class Menu implements OnInit {

    breadcrumbFirst: string = 'Menu';
    breadcrumbSecond: string = 'Dashboard';
    currentTheme: string = 'light';
    iconClass: string = 'bx bx-moon fs-22';

    isSidebarOpen: boolean = false;

    username: string = 'Admin';
    id: string = '';

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) { }

    ngOnInit() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);

        const user = this.authService.getCurrentUser();
        if (user) {
            this.username = user.nombreUsuario;
            this.id = user.idUsuario?.toString() || '';
        }

        this.updateBreadcrumbFromRoute(this.activatedRoute);

        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
            let route = this.activatedRoute;
            while (route.firstChild) {
                route = route.firstChild;
            }
            this.updateBreadcrumbFromRoute(route);
        });
    }


    private updateBreadcrumbFromRoute(route: ActivatedRoute) {
        const urlSegment = route.snapshot.url.length > 0 ? route.snapshot.url[0].path : undefined;

        let finalUrl = urlSegment;

        if (!finalUrl || finalUrl === '') {
            finalUrl = 'dashboard';
        }

        this.updateBreadcrumb(finalUrl);
    }


    private updateBreadcrumb(url: string | undefined) {
        if (url === 'dashboard') {
            this.breadcrumbSecond = 'Dashboard';
        } else if (url === 'pacientes') {
            this.breadcrumbSecond = 'Pacientes';
        } else if (url === 'ordenes') {
            this.breadcrumbSecond = 'Órdenes Médicas';
        } else if (url === 'toma-muestra') {
            this.breadcrumbSecond = 'Toma de Muestra';
        } else if (url === 'resultados') {
            this.breadcrumbSecond = 'Resultados';
        } else if (url === 'reportes') {
            this.breadcrumbSecond = 'Reportes';
        } else if (url === 'consulta-medico') {
            this.breadcrumbSecond = 'Consulta Médica';
        } else if (url === 'usuarios') {
            this.breadcrumbSecond = 'Usuarios';
        } else {
            this.breadcrumbSecond = 'Dashboard';
        }

        this.breadcrumbFirst = 'Menú';
    }

    toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;

        if (window.innerWidth <= 991) {
            document.body.classList.toggle('vertical-sidebar-enable', this.isSidebarOpen);
            document.body.classList.remove('vertical-collapsed');
        } else {
            document.body.classList.toggle('vertical-collapsed', this.isSidebarOpen);
            document.body.classList.remove('vertical-sidebar-enable');
        }
    }


    toggleDarkMode() {
        if (this.currentTheme === 'dark') {
            this.setTheme('light');
        } else {
            this.setTheme('dark');
        }
    }

    private setTheme(theme: string) {
        this.currentTheme = theme;

        document.documentElement.setAttribute('data-bs-theme', theme);

        if (theme === 'dark') {
            document.body.classList.add('dark-layout');
            this.iconClass = 'bx bx-sun fs-22';
        } else {
            document.body.classList.remove('dark-layout');
            this.iconClass = 'bx bx-moon fs-22';
        }

        localStorage.setItem('theme', theme);
    }
}